import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eyx3e6b3g.css';
import '../../css/w/wnjmof43i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eyx3e6b3g"/><path class="wnjmof43i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:folder-add-bold"} {...others} />);
}

export default Component;
