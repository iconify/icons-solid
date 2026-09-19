import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vfe20pbns {
  fill: currentColor;
  d: path("M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2M6.5 9L10 5.5L13.5 9H11v4H9V9zm11 6L14 18.5L10.5 15H13v-4h2v4z");
}
</style><path class="vfe20pbns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:swap-vertical-circle"} {...others} />);
}

export default Component;
