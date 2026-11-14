import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yqiy8ef7n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m1.904 18.561l5.657-5.657l3.535 3.535l-5.657 5.657Zm11-11l5.657-5.657l3.535 3.535l-5.657 5.657ZM12 10v4");
}
</style><path class="yqiy8ef7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:unlink-text"} {...others} />);
}

export default Component;
