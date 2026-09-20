import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fk0umbd_j {
  fill: currentColor;
  d: path("M7.775 15.5h8.45q.575 0 .875-.513t0-1.012l-4.25-7.05q-.3-.5-.85-.5t-.85.5l-4.25 7.05q-.3.5 0 1.013t.875.512m.325 5.713q-1.825-.788-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22t-3.9-.788");
}
</style><path class="fk0umbd_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:triangle-circle-rounded"} {...others} />);
}

export default Component;
