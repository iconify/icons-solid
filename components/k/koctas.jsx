import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.wjqwzhbrg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 38.826h-29V18.553L24 7.575l14.5 10.978zM24 19.769L9.5 30.747m9.988-7.561v15.64m0-9.331H38.5m-9.988 0V10.991m0 12.195l-12.566-9.514");
}
</style><path class="wjqwzhbrg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:koctas"} {...others} />);
}

export default Component;
