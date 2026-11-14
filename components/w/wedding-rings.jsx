import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.li57dylxg {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9 6.75q.186 0 .368.009q.368-.541.859-1.032Q12.204 3.75 15 3.75t4.773 1.977T21.75 10.5t-1.977 4.773T15 17.25q-.186 0-.368-.009q-.368.541-.859 1.032Q11.796 20.25 9 20.25t-4.773-1.977T2.25 13.5t1.977-4.773T9 6.75");
}
</style><path class="li57dylxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:wedding-rings"} {...others} />);
}

export default Component;
