import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bqg594bby {
  fill: currentColor;
  d: path("M15.55 12.675L11.325 8.45L16.2 3.575q.3-.3.663-.437T17.625 3t.775.15t.65.45L20.425 5q.3.275.437.65T21 6.4q0 .4-.138.763t-.437.662zM19.8 22.6l-7.075-7.05L7.25 21H3v-4.225L8.475 11.3L1.4 4.2l1.425-1.425l18.4 18.4zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z");
}
</style><path class="bqg594bby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:edit-off"} {...others} />);
}

export default Component;
