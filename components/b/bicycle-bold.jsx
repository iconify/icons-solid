import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuzsc71hw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cuzsc71hw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:bicycle-bold"} {...others} />);
}

export default Component;
