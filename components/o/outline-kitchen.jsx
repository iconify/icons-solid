import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rcei_9kan {
  fill: currentColor;
  d: path("M8 5h2v3H8zm0 7h2v5H8zm10-9.99L6 2a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99M18 20H6v-9.02h12zm0-11H6V4h12z");
}
</style><path class="rcei_9kan"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-kitchen"} {...others} />);
}

export default Component;
