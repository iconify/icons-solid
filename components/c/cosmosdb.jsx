import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-z07utpj.css';
import '../../css/d/d2xkq0bie.css';
import '../../css/v/vc6oyzbtg.css';
import '../../css/y/ykk37hror.css';
import '../../css/x/xu-e9yfuh.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="n-z07utpj"/><path class="d2xkq0bie"/><path class="vc6oyzbtg"/><path class="ykk37hror"/><path class="xu-e9yfuh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:cosmosdb"} {...others} />);
}

export default Component;
