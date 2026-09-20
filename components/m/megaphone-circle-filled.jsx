import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/g/go96jlqsl.css';
import '../../css/t/tz8c7omyk.css';
import '../../css/g/g_mdxu2az.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGQlCDhJDq"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="go96jlqsl"/><path class="tz8c7omyk"/><path class="g_mdxu2az"/></g></mask></defs><circle mask="url(#SVGQlCDhJDq)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:megaphone-circle-filled"} {...others} />);
}

export default Component;
