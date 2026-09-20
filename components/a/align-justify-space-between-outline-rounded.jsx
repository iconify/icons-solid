import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hupt5ofni {
  fill: currentColor;
  d: path("M20.143 20.856Q20 20.713 20 20.5v-4h-1.192q-.344 0-.576-.232T18 15.692V8.308q0-.343.232-.576t.576-.232H20v-4q0-.213.144-.356T20.501 3t.356.144T21 3.5v17q0 .213-.144.356t-.357.144t-.356-.144M3.5 21q-.213 0-.356-.144T3 20.5v-17q0-.213.144-.356T3.501 3t.356.144T4 3.5v4h1.192q.343 0 .576.232T6 8.308v7.384q0 .344-.232.576t-.576.232H4v4q0 .213-.144.356T3.499 21");
}
</style><path class="hupt5ofni"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:align-justify-space-between-outline-rounded"} {...others} />);
}

export default Component;
