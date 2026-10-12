import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":272};
const content = `<style>.awm0tnbha {
  fill: var(--svg-color--faa520, #faa520);
  d: path("M128.551 0L82.562 95.031l46.697 40.688l45.316-40.688z");
}

.mws_sskyy {
  fill: var(--svg-color--e18026, #e18026);
  d: path("M255.999 161.694V45.756L140.195 148.002l66.594 56.421z");
}

.tccmjabew {
  fill: var(--svg-color--f78f28, #f78f28);
  d: path("M3.576 47.094L0 161.659l129.222 110.342l64.858-56.772z");
}
</style><path class="awm0tnbha"/><path class="tccmjabew"/><path class="mws_sskyy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:grain-lang"} {...others} />);
}

export default Component;
