import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n8fl8nrbx {
  fill: currentColor;
  d: path("M7 17V2h7.875q-.2.475-.288.975T14.5 4H9v10.2q1.125-1.05 2.538-1.625T14.5 12q1.525 0 2.95.588T20 14.225V9.5q.525 0 1.025-.088T22 9.125V17zm-3.4 5.225L1.75 7.35L5 6.95v2l-1 .125L5.35 20l7.45-1h5.45l.15 1.4zM17.675 6.5l1.775-5h1.1l1.8 5h-1.075L20.9 5.4h-1.8l-.375 1.1zm1.675-1.85h1.3L20 2.6zM14.5 14q-.875 0-1.725.25T11.2 15h6.6q-.725-.5-1.575-.75T14.5 14m0-8.5q1.15 0 1.95.8t.8 1.95t-.8 1.95t-1.95.8t-1.95-.8t-.8-1.95t.8-1.95t1.95-.8m0 2q-.325 0-.537.213t-.213.537t.213.538T14.5 9t.538-.213t.212-.537t-.213-.537T14.5 7.5");
}
</style><path class="n8fl8nrbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:photo-auto-merge-outline-sharp"} {...others} />);
}

export default Component;
