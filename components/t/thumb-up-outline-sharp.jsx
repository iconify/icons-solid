import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i_28r7blq {
  fill: currentColor;
  d: path("M7.423 20V9l6.27-6.192l.869.869L13.435 9H22v3.17L18.696 20zm1-1h9.596L21 11.98V10h-8.808l1.158-5.461l-4.927 4.888zm0-9.573V19zM3 20V9h4.423v1H4v9h3.423v1z");
}
</style><path class="i_28r7blq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:thumb-up-outline-sharp"} {...others} />);
}

export default Component;
