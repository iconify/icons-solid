import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3kqgabln.css';
import '../../css/t/tujegccpp.css';
import '../../css/s/srbw3txpj.css';
import '../../css/w/wu6ohmbzf.css';
import '../../css/o/oawqiob8b.css';

const viewBox = {"width":256,"height":256};
const content = `<path clip-rule="evenodd" class="j3kqgabln"/><path clip-rule="evenodd" class="tujegccpp"/><path clip-rule="evenodd" class="srbw3txpj"/><path clip-rule="evenodd" class="wu6ohmbzf"/><path clip-rule="evenodd" class="oawqiob8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:logo-au"} {...others} />);
}

export default Component;
