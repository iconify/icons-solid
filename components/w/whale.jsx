import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lmgdydb1c {
  fill-rule: evenodd;
  d: path("M3 12q0-.285.017-.563H3V9.75h15.96a7.315 7.315 0 0 0-7.523-5.041V3.017Q11.717 3 12 3a9 9 0 1 1-9 9m1.687 0q0-.285.022-.563h1.129a6.187 6.187 0 0 0 6.715 6.726v-1.697a4.5 4.5 0 0 1-5.018-5.029H19.29q.021.278.021.563a7.312 7.312 0 1 1-14.625 0M12 15.375a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25");
}
</style><path clip-rule="evenodd" class="lmgdydb1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:whale"} {...others} />);
}

export default Component;
