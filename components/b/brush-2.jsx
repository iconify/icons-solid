import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xca2aubva.css';
import '../../css/o/on_40xtwh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-primary-layer xca2aubva"/><path class="duoicon-secondary-layer on_40xtwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:brush-2"} {...others} />);
}

export default Component;
