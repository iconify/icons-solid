import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vmhcj841s {
  fill: currentColor;
  d: path("M4.207 16.438q-1.86-1.87-1.86-4.534t1.86-4.534T8.73 5.5t4.534 1.87t1.87 4.534t-1.87 4.534t-4.534 1.87t-4.524-1.87M18.885 19V6.916L17.4 8.4l-.708-.708L19.385 5l2.692 2.692l-.713.708l-1.48-1.479V19zm-7.847-4.02l.728-.707l-2.516-2.54v-3.54h-1v4z");
}
</style><path class="vmhcj841s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:clock-arrow-up-sharp"} {...others} />);
}

export default Component;
