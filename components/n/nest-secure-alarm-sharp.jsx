import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u0b6gypdk {
  fill: currentColor;
  d: path("M8.1 21.213q-1.825-.788-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22t-3.9-.788M8 10h2V8H8zm3 0h2V8h-2zm3 0h2V8h-2zm-6 3h2v-2H8zm3 0h2v-2h-2zm3 0h2v-2h-2zm-6 3h2v-2H8zm3 0h2v-2h-2zm3 0h2v-2h-2z");
}
</style><path class="u0b6gypdk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:nest-secure-alarm-sharp"} {...others} />);
}

export default Component;
