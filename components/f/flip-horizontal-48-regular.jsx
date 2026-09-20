import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.im9us5bzt {
  fill: currentColor;
  d: path("M43.803 39.423A1.25 1.25 0 0 1 42.75 40h-15.5c-.69 0-1.25-.56-1.25-1.25V5.25a1.25 1.25 0 0 1 2.384-.525l15.5 33.5a1.25 1.25 0 0 1-.08 1.198M28.5 10.928V37.5h12.294zM5 40a1 1 0 0 1-.905-1.425l16-34A1 1 0 0 1 22 5v34a1 1 0 0 1-1 1z");
}
</style><path class="im9us5bzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:flip-horizontal-48-regular"} {...others} />);
}

export default Component;
