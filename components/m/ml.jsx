import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gjjzc_bio {
  fill: var(--svg-color--11967f, #11967f);
  d: path("m3 3l3.6 1.512v15.066L3 21zm4.8 7.2l3.6 1.512v6.066L7.8 19.2zM21 21l-3.6-1.512V4.422L21 3zm-4.8-7.2l-3.6-1.512V6.222L16.2 4.8z");
}
</style><path class="gjjzc_bio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:ml"} {...others} />);
}

export default Component;
