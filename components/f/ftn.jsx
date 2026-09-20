import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ni7m5gbnc {
  fill: var(--svg-color--ff008c, #ff008c);
  d: path("M8.992 20.971a1.38 1.38 0 0 0 1.196-.318l8.726-7.725a1.52 1.52 0 0 0 .424-1.599a1.52 1.52 0 0 0-1.313-1.033l-5.608-.53l3.426-4.648a1.345 1.345 0 0 0-.137-1.726A1.4 1.4 0 0 0 14.747 3c-.339 0-.667.122-.916.35l-8.737 7.709a1.503 1.503 0 0 0 .08 2.32c.233.184.519.29.815.317l5.608.54l-3.426 4.649a1.324 1.324 0 0 0 .82 2.086");
}
</style><path class="ni7m5gbnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:ftn"} {...others} />);
}

export default Component;
