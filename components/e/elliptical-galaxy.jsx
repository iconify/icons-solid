import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qn-hqlbko {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.5 12q-.001-3.285 3.167-5.56Q7.719 4.248 12 4.248t7.333 2.192Q22.502 8.715 22.5 12q.002 3.285-3.167 5.56q-3.052 2.192-7.333 2.192T4.667 17.56Q1.499 15.285 1.5 12m5.493-3.633Q4.75 9.834 4.75 12t2.243 3.633Q9.084 17 12 17t5.007-1.367Q19.25 14.166 19.25 12t-2.243-3.633Q14.916 7 12 7T6.993 8.367");
}
</style><path class="qn-hqlbko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:elliptical-galaxy"} {...others} />);
}

export default Component;
