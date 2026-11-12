import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bb6l48yol {
  fill: currentColor;
  d: path("M5 6.925V17zm10-2.7Q12.6 5.3 10.113 6.05T5 6.925V17q2.675-.175 5.188-1.037T15 13.725zM4 19l-1-1v-1H2v-3h1V9.975H2v-3h1v-2.05Q6.35 4.75 9.538 3.9t6.237-2.225L17 2.45v12.4q-2.975 1.775-6.25 2.85T4 19m0 0v-2h15V6.975h-3v-2h5V19z");
}
</style><path class="bb6l48yol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:print-landscape-short-outline-sharp"} {...others} />);
}

export default Component;
