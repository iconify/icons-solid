import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m6hdykugr {
  fill: currentColor;
  d: path("M16.385 21.192h-8v-2q0-1.676 1.174-2.838t2.826-1.162q.274 0 .534.035t.529.104l.666-1.042l-2.274-.214q-2.06-.211-3.45-1.735T7 8.75q0-2.071 1.388-3.595T11.84 3.38l5.589-.485v11.721l-2.156-.2l-.025-.019l-.873 1.31q.898.52 1.454 1.432t.555 2.052z");
}
</style><path class="m6hdykugr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:nest-cam-wired-stand-sharp"} {...others} />);
}

export default Component;
