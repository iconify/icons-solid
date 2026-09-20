import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.botsbbmgq {
  fill: currentColor;
  d: path("M14 5.25a1.25 1.25 0 1 0-2.5 0v6.25H5.25a1.25 1.25 0 1 0 0 2.5h6.25v16.25a6.25 6.25 0 0 0 6.25 6.25H34v6.25a1.25 1.25 0 1 0 2.5 0V36.5h6.25a1.25 1.25 0 1 0 0-2.5h-25A3.75 3.75 0 0 1 14 30.25zm20 12.5V32h2.5V17.75a6.25 6.25 0 0 0-6.25-6.25H16V14h14.25A3.75 3.75 0 0 1 34 17.75");
}
</style><path class="botsbbmgq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:crop-48-regular"} {...others} />);
}

export default Component;
