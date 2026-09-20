import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mzjr1sbqy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mzjr1sbqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:design-tool-pencil-ruler-bold"} {...others} />);
}

export default Component;
