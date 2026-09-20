import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tbdejr6hh {
  fill: currentColor;
  d: path("M13.246 21.005a.75.75 0 1 0 0-1.5H5.577l15.2-15.2a.765.765 0 0 0-1.082-1.081l-15.199 15.2v-7.67a.75.75 0 0 0-1.5 0v9.5c0 .415.336.75.75.75z");
}
</style><path class="tbdejr6hh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-down-left-24-regular"} {...others} />);
}

export default Component;
