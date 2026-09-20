import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fkkinuhjw.css';
import '../../css/g/gtrrzp07a.css';
import '../../css/m/m08-abbvo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fkkinuhjw"/><path class="gtrrzp07a"/><path clip-rule="evenodd" class="m08-abbvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:revv"} {...others} />);
}

export default Component;
