import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ijmbp0vus.css';
import '../../css/t/td80pac2f.css';
import '../../css/h/h38q_tbmo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ijmbp0vus"/><path class="td80pac2f"/><path class="h38q_tbmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:marp"} {...others} />);
}

export default Component;
