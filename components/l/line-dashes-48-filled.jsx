import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.tp0iehb8l {
  fill: currentColor;
  d: path("M43.56 6.56a1.5 1.5 0 0 0-2.12-2.12l-2 2a1.5 1.5 0 0 0 2.12 2.12zm-8 5.88a1.5 1.5 0 0 1 0 2.12l-3 3a1.5 1.5 0 0 1-2.12-2.12l3-3a1.5 1.5 0 0 1 2.12 0m-9 11.12a1.5 1.5 0 0 0-2.12-2.12l-3 3a1.5 1.5 0 0 0 2.12 2.12zm-9 6.88a1.5 1.5 0 0 1 0 2.12l-3 3a1.5 1.5 0 0 1-2.12-2.12l3-3a1.5 1.5 0 0 1 2.12 0m-9 9a1.5 1.5 0 0 1 0 2.12l-2 2a1.5 1.5 0 0 1-2.12-2.12l2-2a1.5 1.5 0 0 1 2.12 0");
}
</style><path class="tp0iehb8l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:line-dashes-48-filled"} {...others} />);
}

export default Component;
