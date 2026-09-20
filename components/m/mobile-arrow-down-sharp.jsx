import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d3jqfjuwn {
  fill: currentColor;
  d: path("M12 15.308L15.308 12l-.708-.708l-2.1 2.089V8.692h-1v4.689l-2.1-2.089l-.708.708zM6 22V2h12.077v4.83H19v3.686h-.923V22z");
}
</style><path class="d3jqfjuwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:mobile-arrow-down-sharp"} {...others} />);
}

export default Component;
