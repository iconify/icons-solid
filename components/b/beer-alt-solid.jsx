import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h0tnx4bjy.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/p/pezwhmz2k.css';
import '../../css/w/w49j0rbvv.css';
import '../../css/u/u8-8_86dt.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGO1siZcqz"><path d="M5 23.67h1c0.6 -0.37 1.22 -0.67 2 -0.67c2 0 3 2 5 2c1.64 0 2.6 -1.34 4 -1.83h1" class="h0tnx4bjy"><animate fill="freeze" attributeName="d" begin="0.6s" dur="0.3s" to="M5 7.67h1c0.6 -0.37 1.22 -0.67 2 -0.67c2 0 3 2 5 2c1.64 0 2.6 -1.34 4 -1.83h1"/></path><path d="M18 23c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2v15h25Z" class="n1mjunbsu"><animate fill="freeze" attributeName="d" begin="0.6s" dur="0.3s" to="M18 7c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2v15h25Z"/></path><path class="pezwhmz2k"/></mask></defs><path mask="url(#SVGO1siZcqz)" class="w49j0rbvv"/><path class="u8-8_86dt"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="62;0"/></path>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:beer-alt-solid"} {...others} />);
}

export default Component;
