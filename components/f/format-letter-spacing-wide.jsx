import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ox0qi1els {
  fill: currentColor;
  d: path("M4 19V5h1v14zm15 0V5h1v14zM7.773 17l3.673-9.923h1.05L16.227 17H15.15l-1.004-2.839H9.808L8.812 17zm2.362-3.712h3.692l-1.816-5.111h-.038z");
}
</style><path class="ox0qi1els"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:format-letter-spacing-wide"} {...others} />);
}

export default Component;
