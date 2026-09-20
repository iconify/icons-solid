import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s9xqsmb6z {
  fill: currentColor;
  d: path("M2.5 20.5V6.25L6 3.616l3 2.25l3-2.25l3 2.25l3-2.25l3.5 2.634V20.5zm1-1h5V6.75L6 4.866L3.5 6.75zm6 0h5V6.75L12 4.866L9.5 6.75zm6 0h5V6.75L18 4.866L15.5 6.75z");
}
</style><path class="s9xqsmb6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:outdoor-garden-outline-rounded"} {...others} />);
}

export default Component;
