import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aunpmjb5a.css';
import '../../css/u/ukoyhjbde.css';
import '../../css/y/yyq2ah3cx.css';
import '../../css/l/lurqadlpz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="aunpmjb5a"/><path class="ukoyhjbde"/><path class="yyq2ah3cx"/><path class="lurqadlpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-clipchamp-light"} {...others} />);
}

export default Component;
