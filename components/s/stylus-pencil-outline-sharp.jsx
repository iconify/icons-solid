import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jui462bxk {
  fill: currentColor;
  d: path("M6.923 15.308L11.346 4h1.289l4.423 11.308zm1.458-1H15.6L12 5.128zm0 0H15.6zM5 20l.827-2.308h12.346L19 20z");
}
</style><path class="jui462bxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:stylus-pencil-outline-sharp"} {...others} />);
}

export default Component;
