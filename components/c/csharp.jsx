import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/db4kthskb.css';
import '../../css/k/k3pjpkicj.css';
import '../../css/s/s3clobqog.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/f/fkix1bffw.css';
import '../../css/i/inv44fb2j.css';

const viewBox = {"width":255.58,"height":290.11,"top":-1.43};
const content = `<path class="db4kthskb"/><path class="k3pjpkicj"/><path class="s3clobqog"/><g class="n1mjunbsu"><path class="fkix1bffw"/><path class="inv44fb2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:csharp"} {...others} />);
}

export default Component;
