import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/go54-0b6u.css';
import '../../css/t/tcxvtksxa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="go54-0b6u"/><path class="tcxvtksxa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:task-edit-02"} {...others} />);
}

export default Component;
