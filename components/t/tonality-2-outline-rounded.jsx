import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rwdkkk_0v {
  fill: currentColor;
  d: path("M8.1 21.213q-1.825-.788-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22t-3.9-.788M13 4.05v15.9q3.025-.375 5.013-2.65T20 12t-1.987-5.3T13 4.05M11 5v-.95q-.75.125-1.475.338T8.15 5zm0 3V7H5.75q-.2.225-.35.475T5.1 8zm0 3v-1H4.25l-.1.5l-.1.5zm0 3v-1H4.05l.1.5l.1.5zm0 3v-1H5.1q.15.275.3.525t.35.475zm0 2.95V19H8.15q.65.4 1.375.613T11 19.95M13 12");
}
</style><path class="rwdkkk_0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tonality-2-outline-rounded"} {...others} />);
}

export default Component;
