import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zp4vkvb7i.css';
import '../../css/q/quusr8xpo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zp4vkvb7i"/><path clip-rule="evenodd" class="quusr8xpo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:erase-24"} {...others} />);
}

export default Component;
