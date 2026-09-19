import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae8_af5qa.css';

const viewBox = {"width":12,"height":24};
const content = `<path class="ae8_af5qa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:yandex"} {...others} />);
}

export default Component;
