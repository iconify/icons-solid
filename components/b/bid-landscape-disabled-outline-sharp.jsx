import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t5oc_mb5c {
  fill: currentColor;
  d: path("m1.825 1.775l20.4 20.4L20.8 23.6L18.2 21H3V5.8L.4 3.2zM9 12.95l-4 4V19h11.2l-2.6-2.6l-.55.6zM5 7.8v6.3l3.15-3.15zM5.9 3H21v15.1l-2-2v-5.85l-2.75 3.1l-1.425-1.425L19 7.25V5H7.9zm7.5 7.5");
}
</style><path class="t5oc_mb5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:bid-landscape-disabled-outline-sharp"} {...others} />);
}

export default Component;
