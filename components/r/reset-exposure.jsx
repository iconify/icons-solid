import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e_w9hqbjv {
  fill: currentColor;
  d: path("M4 21v-2h2.35Q4.8 17.75 3.9 15.938T3 12q0-1.875.713-3.512t1.924-2.85t2.85-1.925T12 3q3.225 0 5.663 1.988T20.775 10H18.7q-.65-2.2-2.475-3.6T12 5Q9.075 5 7.038 7.038T5 12q0 1.8.813 3.3T8 17.75V15h2v6zm9.5 1q-.625 0-1.062-.437T12 20.5v-7q0-.625.438-1.062T13.5 12h7q.625 0 1.063.438T22 13.5v7q0 .625-.437 1.063T20.5 22zm.5-2h6v-6z");
}
</style><path class="e_w9hqbjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:reset-exposure"} {...others} />);
}

export default Component;
