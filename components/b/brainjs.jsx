import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cbnyogbhp {
  fill: var(--svg-color--2e2e2c, #2e2e2c);
  d: path("m175.744 196.096l33.024 18.432l-10.112 23.808h-8.704l-7.168-10.88l-53.12-14.208zm-41.6-54.784l37.504 29.696v19.328l-50.304 19.456l-26.24 1.28l-20.224-27.136l19.072-26.112zm55.808-8.832l46.848 28.8l-5.76 35.328l-18.048 13.312l-34.56-19.584v-19.328l-6.528-37.376zm-24.96 2.304l5.888 27.776l-28.672-23.936z");
}

.x5yhfcbvc {
  fill: var(--svg-color--f3df49, #f3df49);
  d: path("M0 0h256v256H0z");
}
</style><path class="x5yhfcbvc"/><path class="cbnyogbhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:brainjs"} {...others} />);
}

export default Component;
