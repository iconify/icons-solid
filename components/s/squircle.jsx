import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jum3tqgyk {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 1.75q6.686 0 8.468 1.782T22.25 12t-1.782 8.468T12 22.25t-8.468-1.782T1.75 12t1.782-8.468T12 1.75");
}
</style><path class="jum3tqgyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:squircle"} {...others} />);
}

export default Component;
