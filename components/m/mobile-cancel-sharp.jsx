import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dfl_e-8_n {
  fill: currentColor;
  d: path("M9.65 15.058L12 12.713l2.344 2.345l.714-.708l-2.35-2.35l2.35-2.344l-.714-.714L12 11.292l-2.35-2.35l-.708.714L11.287 12l-2.345 2.35zM6 22V2h12.077v4.83H19v3.686h-.923V22z");
}
</style><path class="dfl_e-8_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:mobile-cancel-sharp"} {...others} />);
}

export default Component;
