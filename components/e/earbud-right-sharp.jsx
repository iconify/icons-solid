import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z7k103kav {
  fill: currentColor;
  d: path("M12 22V4h9v8h-3v10zm-3-8q-2.5 0-4.25-1.75T3 8t1.75-4.25T9 2h1v12z");
}
</style><path class="z7k103kav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:earbud-right-sharp"} {...others} />);
}

export default Component;
