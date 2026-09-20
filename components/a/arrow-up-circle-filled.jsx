import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/o/ok917nzon.css';
import '../../css/v/v661fkboo.css';
import '../../css/s/s7gevvepe.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGz8ADmnJf"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="ok917nzon"/><path class="v661fkboo"/><path class="s7gevvepe"/></g></mask></defs><circle mask="url(#SVGz8ADmnJf)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:arrow-up-circle-filled"} {...others} />);
}

export default Component;
