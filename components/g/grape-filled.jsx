import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dy6yqbbtn.css';
import '../../css/c/ceo0jccjy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dy6yqbbtn"/><path class="ceo0jccjy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:grape-filled"} {...others} />);
}

export default Component;
