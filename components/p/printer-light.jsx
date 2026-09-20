import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.xr_4tlh2w {
  fill: currentColor;
  d: path("M214.67 74H198V40a6 6 0 0 0-6-6H64a6 6 0 0 0-6 6v34H41.33C28.47 74 18 83.87 18 96v80a6 6 0 0 0 6 6h34v34a6 6 0 0 0 6 6h128a6 6 0 0 0 6-6v-34h34a6 6 0 0 0 6-6V96c0-12.13-10.47-22-23.33-22M70 46h116v28H70Zm116 164H70v-52h116Zm40-40h-28v-18a6 6 0 0 0-6-6H64a6 6 0 0 0-6 6v18H30V96c0-5.51 5.08-10 11.33-10h173.34c6.25 0 11.33 4.49 11.33 10Zm-28-54a10 10 0 1 1-10-10a10 10 0 0 1 10 10");
}
</style><path class="xr_4tlh2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:printer-light"} {...others} />);
}

export default Component;
