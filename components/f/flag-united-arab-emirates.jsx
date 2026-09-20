import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.ge6ieb12h {
  fill: var(--svg-color--eee, #eee);
  d: path("M9 14h27v8H9z");
}

.jixhx7bvb {
  fill: var(--svg-color--141414, #141414);
  d: path("M9 31h23a4 4 0 0 0 4-4v-5H9z");
}

.xjtbevbpj {
  fill: var(--svg-color--068241, #068241);
  d: path("M32 5H9v9h27V9a4 4 0 0 0-4-4");
}

.ys3n3ybcv {
  fill: var(--svg-color--ec2028, #ec2028);
  d: path("M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h5V5z");
}
</style><path class="xjtbevbpj"/><path class="ge6ieb12h"/><path class="jixhx7bvb"/><path class="ys3n3ybcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:flag-united-arab-emirates"} {...others} />);
}

export default Component;
