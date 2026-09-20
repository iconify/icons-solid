import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z342z-nnh {
  fill: currentColor;
  d: path("M4 21v-2h2.35Q4.8 17.75 3.9 15.938T3 12q0-1.875.713-3.512t1.924-2.85t2.85-1.925T12 3q3.225 0 5.663 1.988T20.775 10H18.7q-.65-2.2-2.475-3.6T12 5Q9.075 5 7.038 7.038T5 12q0 1.8.813 3.3T8 17.75V15h2v6zm8 1V12h10v10zm2-2h6v-6z");
}
</style><path class="z342z-nnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:reset-exposure-outline-sharp"} {...others} />);
}

export default Component;
