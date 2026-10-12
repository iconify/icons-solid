import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yym951xqq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7.5h5m-5 4.5h5m-5 4.5h3m5.9-7h.7q.9 0 1.56-.61l2.43-2.28Q17 6 17 6.9v10.2q0 .9-.66.29l-2.43-2.28q-.66-.61-1.56-.61h-.7q-.9 0-.9-.9v-3.2q0-.9.9-.9m8.1-.25a4 4 0 0 1 0 5.5");
}
</style><path class="yym951xqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:text-to-speech"} {...others} />);
}

export default Component;
